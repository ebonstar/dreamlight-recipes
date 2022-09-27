import { Tag } from "grommet";
import styled from "styled-components";

const StyledSmallTag = styled(Tag)`
  & > div {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export function SmallTag({ value }: { value: string }) {
  return <StyledSmallTag value={value} size="xsmall" />;
}
