"use client";

import ApplyCard from "@/components/apply-card/ApplyCard";
import Container from "@/components/container/Container";
import { Typography } from "@/components/typography/Typography";
import { ArrowLeft } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { filterData } from "../../../../data/filter";

export type Filter = {
  id: string;
  image: StaticImageData;
  poster: StaticImageData;
  name: string;
  made_in: string;
  for_text: string;
  price: string;
  description: string;
  info: string;
};

const UniversityDetails = () => {
  const [university, setUniversity] = useState<Filter | null>(null);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const selectedUniversity = filterData.find((item) => item.id === id);
      if (selectedUniversity) {
        setUniversity(selectedUniversity);
      }
    }
  }, [id]);

  return (
    <div>
      <>
        <Container>
          <button
            onClick={() => router.back()}
            className="flex items-center gap-0.5 border border-borderColor py-1.5 px-3 rounded-md mt-10 hover:opacity-90 mb-10"
          >
            <ArrowLeft width={14} height={14} color="#0A0A0A73" />
            <Typography
              variant="body"
              size="sm"
              weight="medium"
              className="text-primary"
            >
              Back
            </Typography>
          </button>
          <div className="flex flex-col gap-4 pb-10">
            <Image
              src={university?.poster || ''}
              alt={`Logo`}
              className="max-w-full w-full rounded-xl"
            />

            <div className="flex flex-col md:flex-row justify-between gap-4">
              {/* Chap tomon (60%) */}
              <div className="flex flex-col gap-4 w-full md:w-[60%]">
                <Typography variant="headline" size="xs">
                  {university?.name}
                </Typography>
                <div
                  dangerouslySetInnerHTML={{
                    __html: university?.description || "",
                  }}
                />
              </div>

              {/* O'ng tomon (40%) */}
              <div className="w-full md:w-[40%]">
                <ApplyCard data={university} />
              </div>
            </div>
          </div>
        </Container>
      </>
    </div>
  );
};

export default UniversityDetails;
