<?php
/**
 * Twenty Twenty-Five functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Five
 * @since Twenty Twenty-Five 1.0
 */

// Adds theme support for post formats.
if ( ! function_exists( 'twentytwentyfive_post_format_setup' ) ) :
	/**
	 * Adds theme support for post formats.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_post_format_setup() {
		add_theme_support( 'post-formats', array( 'aside', 'audio', 'chat', 'gallery', 'image', 'link', 'quote', 'status', 'video' ) );
	}
endif;
add_action( 'after_setup_theme', 'twentytwentyfive_post_format_setup' );

// Enqueues editor-style.css in the editors.
if ( ! function_exists( 'twentytwentyfive_editor_style' ) ) :
	/**
	 * Enqueues editor-style.css in the editors.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_editor_style() {
		add_editor_style( get_parent_theme_file_uri( 'assets/css/editor-style.css' ) );
	}
endif;
add_action( 'after_setup_theme', 'twentytwentyfive_editor_style' );

// Enqueues style.css on the front.
if ( ! function_exists( 'twentytwentyfive_enqueue_styles' ) ) :
	/**
	 * Enqueues style.css on the front.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_enqueue_styles() {
		wp_enqueue_style(
			'twentytwentyfive-style',
			get_parent_theme_file_uri( 'style.css' ),
			array(),
			wp_get_theme()->get( 'Version' )
		);
	}
endif;
add_action( 'wp_enqueue_scripts', 'twentytwentyfive_enqueue_styles' );

// Registers custom block styles.
if ( ! function_exists( 'twentytwentyfive_block_styles' ) ) :
	/**
	 * Registers custom block styles.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_block_styles() {
		register_block_style(
			'core/list',
			array(
				'name'         => 'checkmark-list',
				'label'        => __( 'Checkmark', 'twentytwentyfive' ),
				'inline_style' => '
				ul.is-style-checkmark-list {
					list-style-type: "\2713";
				}

				ul.is-style-checkmark-list li {
					padding-inline-start: 1ch;
				}',
			)
		);
	}
endif;
add_action( 'init', 'twentytwentyfive_block_styles' );

// Registers pattern categories.
if ( ! function_exists( 'twentytwentyfive_pattern_categories' ) ) :
	/**
	 * Registers pattern categories.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_pattern_categories() {

		register_block_pattern_category(
			'twentytwentyfive_page',
			array(
				'label'       => __( 'Pages', 'twentytwentyfive' ),
				'description' => __( 'A collection of full page layouts.', 'twentytwentyfive' ),
			)
		);

		register_block_pattern_category(
			'twentytwentyfive_post-format',
			array(
				'label'       => __( 'Post formats', 'twentytwentyfive' ),
				'description' => __( 'A collection of post format patterns.', 'twentytwentyfive' ),
			)
		);
	}
endif;
add_action( 'init', 'twentytwentyfive_pattern_categories' );

// Registers block binding sources.
if ( ! function_exists( 'twentytwentyfive_register_block_bindings' ) ) :
	/**
	 * Registers the post format block binding source.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_register_block_bindings() {
		register_block_bindings_source(
			'twentytwentyfive/format',
			array(
				'label'              => _x( 'Post format name', 'Label for the block binding placeholder in the editor', 'twentytwentyfive' ),
				'get_value_callback' => 'twentytwentyfive_format_binding',
			)
		);
	}
endif;
add_action( 'init', 'twentytwentyfive_register_block_bindings' );

// Registers block binding callback function for the post format name.
if ( ! function_exists( 'twentytwentyfive_format_binding' ) ) :
	/**
	 * Callback function for the post format name block binding source.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return string|void Post format name, or nothing if the format is 'standard'.
	 */
	function twentytwentyfive_format_binding() {
		$post_format_slug = get_post_format();

		if ( $post_format_slug && 'standard' !== $post_format_slug ) {
			return get_post_format_string( $post_format_slug );
		}
	}
endif;


//custom api

// Register custom dynamic REST API route: /wp-json/custom/v1/{slug}
add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/(?P<slug>[a-zA-Z0-9-_]+)', [
        'methods'  => 'GET',
        'callback' => 'get_custom_page_data_by_slug',
        'permission_callback' => '__return_true',
    ]);
});
function get_custom_page_data_by_slug($data) {
    $slug = sanitize_title($data['slug']);
    $page = get_page_by_path($slug, OBJECT, 'page');

    if (!$page) {
        return new WP_Error('no_page', 'Page not found', ['status' => 404]);
    }

    $title   = get_the_title($page->ID);
    $content = apply_filters('the_content', $page->post_content);
    $excerpt = get_the_excerpt($page->ID);

    // Extract first <a> button label and href
    preg_match('/<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)<\/a>/', $content, $button_match);
    $link   = isset($button_match[1]) ? esc_url_raw($button_match[1]) : '';
    $button = isset($button_match[2]) ? strip_tags($button_match[2]) : '';

    // Extract first <img> URL
    preg_match('/<img[^>]+src=["\']([^"\']+)["\']/', $content, $img_match);
    $image = isset($img_match[1]) ? esc_url_raw($img_match[1]) : '';

    // Remove all <img> tags from content
    $content = preg_replace('/<img[^>]*>/i', '', $content);

    return [
        'title'   => $title,
        'content' => $excerpt,
        'button'  => $button,
        'link'    => $link,        // ✅ Now included
        'image'   => $image,
    ];
}


//category Api

add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/category/(?P<id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'get_category_with_children_and_posts',
        'permission_callback' => '__return_true',
    ]);
});

function get_category_with_children_and_posts($request) {
    $id = (int) $request['id'];
    $term = get_term($id, 'category');

    if (!$term || is_wp_error($term)) {
        return new WP_Error('not_found', 'Category not found', ['status' => 404]);
    }

    return rest_ensure_response(format_category_recursive($term));
}

function format_category_recursive($term) {
    $posts = get_posts([
        'category'    => $term->term_id,
        'numberposts' => -1,
        'post_status' => 'publish',
    ]);

    // Optional: Get the excerpt of the first post (if exists)
    $excerpt = '';
    if (!empty($posts)) {
        setup_postdata($posts[0]); // Prepares global $post
        $excerpt = get_the_excerpt($posts[0]->ID);
        wp_reset_postdata();
    }

    $children = get_terms([
        'taxonomy'   => 'category',
        'hide_empty' => false,
        'parent'     => $term->term_id,
    ]);


    
    return [
        'id'       => $term->term_id,
        'name'     => $term->name,
        'description' => $term->description,
        'slug'     => $term->slug,
        'link'     => get_term_link($term),
        
        'posts'    => array_map(function($post) {
        $links = [];
        
        
        
        
        foreach ($custom_fields as $key => $value) {
        if (preg_match('/^link(_\d+)?$/', $key) && !empty($value)) {
            $links[] = $value;
        }
    }
        $attachments = get_attached_media('image', $post->ID);

    // Map attachments to URLs
    $image_urls = array_map(function($image) {
        return wp_get_attachment_image_url($image->ID, 'full');
    }, $attachments);
    
            return [
                'id'    => $post->ID,
                // Featured/attached images (if any)
    'images' => (function() use ($post) {
        $attachments = get_attached_media('image', $post->ID);
        return array_values(array_map(function($image) {
            return wp_get_attachment_image_url($image->ID, 'full');
        }, $attachments));
    })(),

    // All inline <img> URLs in post content
    'content_images' => (function() use ($post) {
        $content = apply_filters('the_content', $post->post_content);
        $images = [];

        if (preg_match_all('/<img[^>]+src=["\']([^"\']+)["\']/i', $content, $matches)) {
            $images = $matches[1];
        }

        return $images;
    })(),
    'publishedOn' => get_the_modified_date('F j, Y', $post),
                'title' => get_the_title($post),
                'slug'    => $post->post_name, 
                'link'  => get_permalink($post),
                'content' => get_the_excerpt($post),
                'summaries' => (function() use ($post) {
    $content = apply_filters('the_content', $post->post_content);
    
    preg_match_all('/<summary[^>]*>(.*?)<\/summary>/is', $content, $matches);
    
    // Return only non-empty, trimmed entries
    return array_values(array_filter(array_map('trim', $matches[1])));
})(),
'list_items' => (function() use ($post) {
    $content = apply_filters('the_content', $post->post_content);
    $groups = [];

    // Match all <ul> or <ol> blocks
    if (preg_match_all('/<(ul|ol)[^>]*>(.*?)<\/\1>/is', $content, $matches)) {
        foreach ($matches[2] as $listHtml) {
            if (preg_match_all('/<li[^>]*>(.*?)<\/li>/is', $listHtml, $liMatches)) {
                $items = array_map('strip_tags', array_map('trim', $liMatches[1]));
                if (!empty($items)) {
                    $groups[] = $items;
                }
            }
        }
    }

    return $groups;
})(),

            ];
        }, $posts),
        'children' => array_map('format_category_recursive', $children),
    ];
}