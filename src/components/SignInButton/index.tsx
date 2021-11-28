import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Button } from '@chakra-ui/button'
import { Box, Flex, Grid, Text } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'

export function SignInButton() {
  const [session] = useSession()

  return session ? (
    <Button
      as={Grid}
      type="button"
      h={{ base: "56px", md: "48px"}}
      borderRadius="48px"
      background="personalized.cyan"
      color="#FFFFFF"
      padding="4px"
      onClick={() => signOut()}
      _hover={{ bg: "#21b5e6d1" }}
      _active={{ bg: "#21b5e6d1", transform: "scale(0.95)", borderColor: "none", }}
      _focus={{
        boxShadow:
          "none",
      }}
    >
      <Box
        as={Grid}
        border="0"
        padding="10px"
        align="center"
        justifyContent="center"
        fontWeight="bold"
        gap="8px"
        gridTemplateColumns="auto auto auto"
        display={{ base: "none", md: "grid" }}
      >
        <FaGithub size="20px" color="#737380" />
        {session.user.name}
        <FiX size="20px" color="#737380" />
      </Box>
      <Box
        display={{ base: "grid", md: "none" }}
      >
        <Avatar name={session.user.name} src={session.user.image} />
      </Box>
    </Button>

  ) : (
      <Button
        as={Grid}
        type="button"
        h="48px"
        borderRadius="48px"
        background="personalized.cyan"
        border="0"
        padding="0 24"
        align="center"
        justifyContent="center"
        color="#FFFFFF"
        fontWeight="bold"
        gap="8px"
        onClick={() => signIn('github')}
        _hover={{ bg: "#21b5e6d1" }}
        _active={{ bg: "#21b5e6d1", transform: "scale(0.95)", borderColor: "none", }}
        _focus={{
          boxShadow:
            "none",
        }}
      >
        <FaGithub size="20px" color="#737380" />
        <Text>Sign in with GitHub</Text>
    </Button>
  );
}
