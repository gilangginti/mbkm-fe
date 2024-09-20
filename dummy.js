import { timeout } from "./src/js/libraries/utilities.js";

export const lowonganMagang = async () => {
  await timeout(300);

  return [
    {
      id: 1,
      picture: "image1",
      title: "Global Finance Accounting Internship",
      company: "PT. Pos Indonesia",
      location: "Bandung, Jawa Barat",
      date: "6 September 2024",
      applicants: "10",
      status: "Aktif",
      bgColor: "ulbiBlue",
    },
    {
      id: 2,
      picture: "image2",
      title: "Affiliate Marketing Strategist and Reseller Coordinator",
      company: "PT. Pos Indonesia",
      location: "Bandung, Jawa Barat",
      date: "6 September 2024",
      applicants: "10",
      status: "Aktif",
      bgColor: "white",
    },
    {
      id: 3,
      picture: "image3",
      title: "Accounting Staff Intern",
      company: "PT. Pos Indonesia",
      location: "Bandung, Jawa Barat",
      date: "6 September 2024",
      applicants: "10",
      status: "Aktif",
      bgColor: "white",
    },
  ];
};

export const artikel = [
  {
    id: 1,
    picture: "image4",
    author: "Admin CDC",
    title: "Onboarding Internship PKKM Flagship Program",
    content: "Here are the biggest enterprise technology acquisition of 2021 so far, in reverse chronological order.",
    postDate: "6 September 2024",
    views: "1.250",
  },
  {
    id: 2,
    picture: "image5",
    author: "Admin CDC",
    title: "Onboarding Internship PKKM Flagship Program",
    content: "Here are the biggest enterprise technology acquisition of 2021 so far, in reverse chronological order.",
    postDate: "6 September 2024",
    views: "1.250",
  },
  {
    id: 3,
    picture: "image4",
    author: "Admin CDC",
    title: "Onboarding Internship PKKM Flagship Program",
    content: "Here are the biggest enterprise technology acquisition of 2021 so far, in reverse chronological order.",
    postDate: "6 September 2024",
    views: "1.250",
  },
];
