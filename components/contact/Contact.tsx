import Container from "../container/Container";
import { Typography } from "../typography/Typography";
import Faq from "../faq/Faq";

const Contact = () => {
  return (
    <Container>
      <div
        className="flex flex-col items-center justify-center gap-20 py-20"
        id="faq"
      >
        <div className="flex flex-col items-center">
          <Typography
            variant="body"
            size="sm"
            className="text-textBrand text-center "
            weight="medium"
          >
            Savollaringiz bormi ?
          </Typography>
          <Typography
            as="h1"
            variant="headline"
            size="md"
            weight="bold"
            className="max-w-[570px] text-[40px] lg:text-[48px] w-full mt-4 text-textPrimary text-center"
          >
            Siz bilishingiz kerak bo'lgan hamma narsa, barchasi bir joyda
          </Typography>
          <Typography
            variant="body"
            size="md"
            className="flex justify-center items-center max-w-[400px] w-full text-textSecondary mt-4 text-center"
          >
            Platformamiz, xizmatlarimiz va funksiyalarimiz haqidagi umumiy
            savollarga tez va keng qamrovli javoblarni toping.
          </Typography>
        </div>
        <Faq />
      </div>
    </Container>
  );
};

export default Contact;
