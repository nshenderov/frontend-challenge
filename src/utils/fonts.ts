import { Roboto_Flex } from 'next/font/google';

const robotoFlex = Roboto_Flex({
  subsets: ['cyrillic'],
});

export const roboto = robotoFlex.className;
