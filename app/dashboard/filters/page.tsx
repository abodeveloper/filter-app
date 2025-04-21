"use client";

import Container from "@/components/container/Container";
import MainLayout from "@/components/main-layout/MainLayout";
//import { University } from "@/components/ui/explore-universitites/ExploreUniversities";
import UniversityCard from "@/components/university-card/UniversityCard";
import axiosInstance from "@/lib/axiosInstance";
import Link from "next/link";
// import { UniversityItems } from "@/components/ui/explore-universitites/ExploreUniversities";
// import UniversityCard from "@/components/university-card/UniversityCard";
// import { fetchInstance } from "@/lib/fetInstance";
import { useEffect, useState } from "react";

interface University {
  id: string;
  name: string;
  tuitionFee: string;
  courseDuration: string;
  collectionId: string;
  images: string[];
  expand: {
    region: {
      name: string;
    };
  };
}

const Universities = () => {
  const [items, setItems] = useState<University[]>([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axiosInstance.get(
          "/universities/records?expand=region"
        );
        setItems(response.data.items);
        alert(JSON.stringify(response.data.items));
      };
      fetchData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  return (
    <MainLayout>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items?.map((university) => (
            <Link key={university.id} href={`/universities/${university.id}`}>
              <UniversityCard
                key={university.id}
                name={university.name}
                location={university.expand.region.name}
                image={university.images[1]}
                tution_fee={university.tuitionFee}
                course_duration={university.courseDuration}
                collectionId={university.collectionId}
                recordId={university.id}
                animation="zoom-in-up"
              />
            </Link>
          ))}
        </div>
      </Container>
    </MainLayout>
  );
};

export default Universities;
