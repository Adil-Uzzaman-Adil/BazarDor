import Container from "@/components/common/Container";
import { DetailSkeleton } from "@/components/common/Skeletons";

export default function Loading() {
  return (
    <Container className="py-10">
      <DetailSkeleton />
    </Container>
  );
}