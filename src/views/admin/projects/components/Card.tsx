import { background, Box, useColorModeValue } from '@chakra-ui/react';
function Card(props: {
  variant?: string;
  extra?: string;
  children?: JSX.Element | any[];
  [x: string]: any;
}) {
  const bg = useColorModeValue('background.100', 'background.900');
  const { variant, extra, children, ...rest } = props;
  return (
    <Box  bg={bg}
      className={`!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl ${
        props.default
          ? 'shadow-shadow-500 dark:shadow-none'
          : 'shadow-shadow-100 dark:shadow-none'
      }  dark:!bg-navy-800 dark:text-white  ${extra}`}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default Card;
