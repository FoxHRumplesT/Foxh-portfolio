import Landing from "~/features/landing";

export default function Index({ params: { lng } }: { params: { lng: string } }) {
  return <Landing lng={lng} />;
};
