import Link from "next/link";
import Container from "../../container/Container";
import {
  GithubIcon,
  LogoTwo,
  ThreadsIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../icons/icons";
import { Typography } from "../../typography/Typography";

const Footer = () => {
  return (
    <div className="mx-5 py-10">
      <div className="p-8 bg-footerBlue rounded-tl-[24px] rounded-tr-[24px]">
        <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-between">
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <LogoTwo />
              </div>
            </div>
          </div>
          <div className="flex items-baseline gap-6">
            <div className="flex gap-3 flex-wrap w-full">
              {/* <Link
                href="/benefits"
                className="text-invertedSecondary hover:opacity-90"
              >
                Benefits
              </Link>
              <Link
                href="/visa-support"
                className="text-invertedSecondary hover:opacity-90"
              >
                Visa support
              </Link> */}
              <Link
                href="#faq"
                className="text-invertedSecondary hover:opacity-90"
              >
                FAQ
              </Link>
              {/* <Link
                href="/get-in-touch"
                className="text-invertedSecondary hover:opacity-90"
              >
                Get in touch
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-950 rounded-bl-[24px] rounded-br-[24px] py-6">
        <Container>
          <div className="flex justify-between items-center">
            <Typography
              className="text-white opacity-65"
              variant="body"
              size="sm"
            >
              Barcha huquqlar himoyalangan © {new Date().getFullYear()}
            </Typography>
            <div className="py-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <TwitterIcon />
                </Link>
                <Link href="/">
                  <GithubIcon />
                </Link>
                <Link href="/">
                  <YoutubeIcon />
                </Link>
                <Link href="/">
                  <ThreadsIcon />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
