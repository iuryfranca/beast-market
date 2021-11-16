import { Box, HStack, Flex, Heading, Link } from '@chakra-ui/layout';
import styles from './styles.module.scss'

export function Header() {
  return (
    // <header className={styles.headerContainer}>
    //   <div className={styles.headerContent}>
    //     <nav>
    //       <h2>Beast Market</h2>
    //     </nav>
    //     <nav>
    //       <a>Store</a>
    //       <a>My Account</a>
    //     </nav>

    //     <button type="button">Teste</button>
    //   </div>
    // </header>

    <HStack as="header" h="5rem" maxW="1280px" m="0 auto">
      <Flex align="center">
        <Heading as="h2">
          Beast Market
        </Heading>

        <Box>
          <Link to="/store">
            Store
          </Link>
          <Link to="/myAccount">
            My Account
          </Link>
        </Box>

      </Flex>
    </HStack>
  );
}
