import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

export default function Pagination({ current, handlenext, handleprev, total }) {
  const prev = (
    <ArrowLeftIcon
      isDisabled={current == 1}
      onClick={handleprev}
      ml="-10px"
      mr="10px"
      mb="5"
    >
      prev
    </ArrowLeftIcon>
  );
  const Next = (
    <ArrowRightIcon
      isDisabled={current == total}
      onClick={handlenext}
      ml="10px"
      mb="5"
    >
      Next
    </ArrowRightIcon>
  );
  const pages = new Array(total).fill(0).map((a, i) => (
    <Button
      onClick={() => handlenext()}
      isDisabled={current === i + 1}
      m="1"
      mb="5"
    >
      {" "}
      {i + 1}{" "}
    </Button>
  ));
  return (
    <div>
      {" "}
      {prev}
      {pages}
      {Next}
    </div>
  );
}
