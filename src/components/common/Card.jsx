import { Card, CardHeader, CardBody, Image, CardFooter, Button, Link } from "@heroui/react";
import GradientSliderText from "./GradientTextSlider";

export default function CardComp({ blogDetails }) {
  return (
    <>
      <Card className="py-4 text-center items-center pb-[80px]" isFooterBlurred shadow="lg">
        <CardHeader className="pb-0 pt-2 px-4 flex-col text-center">
          <div className="pb-4">
            <p className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-gradient ">
              {blogDetails.source.name}
            </p>
          </div>

          <h4 className="font-bold text-large line-clamp-2">{blogDetails.title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 pb-8s">
          <Image
            isZoomed
            alt="Card background"
            className="object-cover rounded-xl w-full"
            src={blogDetails.urlToImage}
          />
        </CardBody>

        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(90%_-_8px)] shadow-small ml-1 z-10 mb-5">
          <small className="text-default-500 py-2">
            Published On : {new Date(blogDetails.publishedAt).toLocaleString()}
          </small>

          <Link isBlock showAnchorIcon color="foreground" target="_blank" href={blogDetails.url}>
            View
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
