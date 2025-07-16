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
    remove_filter('the_content', 'wp_trim_excerpt', 10); // just in case
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


//-----------------to get footer menu in seperate api

add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/parsed-navigation/(?P<id>\d+)', [
        'methods' => 'GET',
        'callback' => 'parse_navigation_block_data',
        'permission_callback' => '__return_true'
    ]);
});

function parse_navigation_block_data($data) {
    $id = intval($data['id']);
    $post = get_post($id);

    if (!$post || $post->post_type !== 'wp_navigation') {
        return new WP_Error('not_found', 'Navigation menu not found', ['status' => 404]);
    }

    $raw_content = $post->post_content;

    // Parse raw block content
    $blocks = parse_blocks($raw_content);
    $structured = extract_menu_from_blocks($blocks);

    return rest_ensure_response($structured);
}

    function extract_menu_from_blocks($blocks) {
    $menu = [];

    foreach ($blocks as $block) {
        if ($block['blockName'] === 'core/navigation-submenu') {
            $item_id = uniqid('menu_', true);
            $submenu = [
                'id' => $item_id,
                'label' => html_entity_decode(strip_tags($block['attrs']['label'] ?? '')),
                'url' => $block['attrs']['url'] ?? '',
                'children' => extract_menu_from_blocks($block['innerBlocks']),
            ];
            $menu[] = $submenu;
        } elseif ($block['blockName'] === 'core/navigation-link') {
            $item_id = uniqid('menu_', true);
            $menu[] = [
                'id' => $item_id,
                'label' => html_entity_decode(strip_tags($block['attrs']['label'] ?? '')),
                'url' => $block['attrs']['url'] ?? '',
            ];
        }
    }

    return $menu;
}



//to get whole page data in blocks

add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/blocks/(?P<id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'get_content_blocks',
    ]);
});

function get_content_blocks($data) {
    $post_id = $data['id'];
    return parse_content_blocks($post_id);
}
function parse_content_blocks($post_id) {
    $post = get_post($post_id);
    $html = $post->post_content;

    $dom = new DOMDocument();
    libxml_use_internal_errors(true); // Suppress HTML5 tag warnings
    $dom->loadHTML(mb_convert_encoding($html, 'HTML-ENTITIES', 'UTF-8'));

    $blocks = [];
    foreach ($dom->getElementsByTagName('section') as $section) {
        $block = [];

        $h1 = $section->getElementsByTagName('title')->item(0);
        if ($h1) {
            $block['title'] = $h1->textContent;
        }

         // Get all <h1> tags
        $headings = [];
        foreach ($section->getElementsByTagName('h1') as $h1) {
            $text = trim($h1->textContent);
            if (!empty($text)) {
                $headings[] = $text;
            }
        }
        $block['headings'] = array_values($headings);


        // $paragraphs = [];
        // foreach ($section->getElementsByTagName('p') as $p) {
        //     if ($p->getElementsByTagName('img')->length == 0) {
        //         $paragraphs[] = $p->textContent;
        //     }
        // }
        // $block['paragraphs'] = $paragraphs;
//         $paragraphs = [];
// foreach ($section->getElementsByTagName('p') as $p) {
//     // Exclude <p> tags that are inside a <div>
//     $isInsideDiv = false;
//     $parent = $p->parentNode;
//     while ($parent !== null && $parent !== $section) {
//         if ($parent->nodeName === 'div') {
//             $isInsideDiv = true;
//             break;
//         }
//         $parent = $parent->parentNode;
//     }

//     if (!$isInsideDiv && $p->getElementsByTagName('img')->length == 0) {
//         $paragraphs[] = trim($p->textContent);
//     }
// }

$paragraphs = [];
foreach ($section->getElementsByTagName('p') as $p) {
    $exclude = false;
    $parent = $p->parentNode;

    // Traverse up to see if inside a list
    while ($parent !== null && $parent !== $section) {
        if (in_array($parent->nodeName, ['ul', 'li', 'span'])) {
            $exclude = true;
            break;
        }
        $parent = $parent->parentNode;
    }

    if (!$exclude && $p->getElementsByTagName('img')->length === 0) {
        $paragraphs[] = trim($p->textContent);
    }
}
// $block['paragraphs'] = $paragraphs;

$block['paragraphs'] = $paragraphs;


        $images = [];

        foreach ($section->getElementsByTagName('img') as $img) {
    $images[] = [
        'src'    => $img->getAttribute('src'),
        'alt'    => $img->getAttribute('alt'),
        'width'  => $img->getAttribute('width'),
        'height' => $img->getAttribute('height')
    ];
}
$block['images'] = array_values($images); // ensure index

 // ✅ Extract list items with span and svg
$list_items = [];

foreach ($section->getElementsByTagName('ul') as $ul) {
    $ul_items = [];

    foreach ($ul->getElementsByTagName('li') as $li) {
        $text = '';
        $svg = '';
        $heading = '';

        // Get <span> inside <li>
        $spanElement = $li->getElementsByTagName('span')->item(0);

        if ($spanElement) {
            // Prefer <h2> if present
            $h2Element = $spanElement->getElementsByTagName('h2')->item(0);
            if ($h2Element) {
                $heading = trim($h2Element->textContent);
            }

            // Fallback to <p> 
            // if (!$heading) {
                $pElement = $spanElement->getElementsByTagName('p')->item(0);
                if ($pElement) {
                    $text = trim($pElement->textContent);
                }
            }
        // }

        // Optional: Get <svg> if present
        $svgElement = $li->getElementsByTagName('svg')->item(0);
        if ($svgElement) {
            $svg = $dom->saveHTML($svgElement);
        }

        if ($heading || $text || $svg) {
            $ul_items[] = [
                'heading' => $heading ,
                'svg'     => $svg,
                'para'    => $text,
            ];
        }
    }

    if (!empty($ul_items)) {
        $list_items[] = $ul_items;
    }
}

$block['list_items'] = $list_items;



// to fetch datas from div 

 $card_details = [];

foreach ($section->getElementsByTagName('div') as $div) {
    foreach ($div->getElementsByTagName('span') as $span) {
        $h2 = '';
        $svg = '';
        $paras = [];
$list_items = []; 
        // Get <h2>
        $h2Element = $span->getElementsByTagName('h2')->item(0);
        if ($h2Element) {
            $h2 = trim($h2Element->textContent);
        }

        // Get <svg>
        $svgElement = $span->getElementsByTagName('svg')->item(0);
        if ($svgElement) {
            $svg = $dom->saveHTML($svgElement);
        }

        // Get <p> tags
        $pElements = $span->getElementsByTagName('p');
        foreach ($pElements as $ptag) {
            $paras[] = trim($ptag->textContent);
        }

        // Get all <li> items inside any <ul>
        foreach ($span->getElementsByTagName('ul') as $ul) {
            foreach ($ul->getElementsByTagName('li') as $li) {
                $list_items[] = trim($li->textContent);
            }
        }
        // Optional: Get <ul> if you need it

        // $ulElement = $span->getElementsByTagName('ul')->item(0);
        // $ulHTML = $ulElement ? $dom->saveHTML($ulElement) : '';

        if ($h2 || $svg || !empty($paras)) {
            $card_details[] = [
                'heading' => $h2,
                'svg'     => $svg,
                'para'    => $paras, 
                'list'    => $list_items
                // You can implode if you want a single string
                // 'list' => $ulHTML,
            ];
        }
    }
}

$block['card_details'] = $card_details;

        $blocks[] = $block;
    }

    return $blocks;
}

// Api to fectch blog post listing 
 add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/post_details', [
        'methods' => 'GET',
        'callback' => function () {
            $posts = get_posts([
                'post_type'      => 'post',
                'posts_per_page' => -1,
                'post_status'    => 'publish',
            ]);

            return array_map(function ($post) {
                $image_id = get_post_thumbnail_id($post->ID);
                $image_url = wp_get_attachment_image_url($image_id, 'full');
                $alt_text = get_post_meta($image_id, '_wp_attachment_image_alt', true) ?: null;

                // Get categories and use the 7th (index 6) if available, otherwise fallback to first
                $categories = get_the_category($post->ID);
                $category_name = null;
                if (!empty($categories)) {
                    $category_name = $categories[6]->name ?? $categories[0]->name ?? null;
                }

                return [
                    'title'    => get_the_title($post),
                    'slug'     => $post->post_name,
                    'image'    => $image_url,
                    'alt'      => $alt_text,
                    'link'     => wp_parse_url(get_permalink($post), PHP_URL_PATH),
                    'category' => $category_name,
                ];
            }, $posts);
        },
        'permission_callback' => '__return_true',
    ]);
});
