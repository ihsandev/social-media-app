import { Flex, Spinner } from "@chakra-ui/react";

interface ISpinner {
  message?: string;
  py?: string | number;
  px?: string | number;
}

export default function LoadingSpinner(props: ISpinner) {
  return <Flex py={props.py} px={props.px} alignItems="center"><Spinner mr="1rem" /> {props.message || 'Load Data'}...</Flex>
}