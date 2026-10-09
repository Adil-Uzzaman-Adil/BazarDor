import Container from "@/components/common/Container";
import { GridSkeleton } from "@/components/common/Skeletons";

export default function Loading() {
  return (
    <Container className="py-10">
      <div className="h-10 w-40 bg-gray-200 rounded animate-pulse mb-6" />
      <GridSkeleton count={8} />
    </Container>
  );
}