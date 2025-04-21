import Image from "next/image";
import Container from "../container/Container";
import { Typography } from "../typography/Typography";

const Media = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center gap-20 py-20">
          <Image
            src="/images/student.png"
            width={515}
            height={386}
            alt="student"
          />
          <div className="max-w-[515px] w-full">
            <Typography
              as="h1"
              variant="headline"
              size="md"
              weight="bold"
              className="max-w-[570px] w-full mt-8 text-textPrimary"
            >
              Effortless University Matching
            </Typography>
            <Typography
              variant="body"
              size="md"
              className="max-w-[400px] w-full text-textSecondary mt-4"
            >
              Discover the best programs tailored to your academic profile and
              career aspirations with our smart matching system.
            </Typography>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex items-center gap-20 py-20">
          <div className="max-w-[515px] w-full">
            <Typography
              as="h1"
              variant="headline"
              size="md"
              weight="bold"
              className="max-w-[570px] w-full mt-8 text-textPrimary"
            >
              Seamless Document Management
            </Typography>
            <Typography
              variant="body"
              size="md"
              className="max-w-[400px] w-full text-textSecondary mt-4"
            >
              Upload, fill notes, manage, and share all your application
              documents in one secure, easy-to-access place.
            </Typography>
          </div>
          <Image
            src="/images/student2.jpg"
            width={515}
            height={386}
            alt="student"
          />
        </div>
      </Container>
    </div>
  );
};

export default Media;
