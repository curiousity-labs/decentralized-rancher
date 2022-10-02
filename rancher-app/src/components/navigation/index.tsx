import { SunIcon, ViewIcon } from "@chakra-ui/icons"
import { Box, Button, Hide, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
const Navigation = () => {
  const navigate = useNavigate()
  return (
    <Box display="flex" flexDirection="column" border="2px" borderStyle="double" borderColor="gray.100" p="4" gap="4">
      <Button
        display="flex"
        gap="2"
        variant="unstyled"
        minW="0"
        justifyContent={["center", "flex-start"]}
        px="0"
        onClick={() => navigate('/spawn')}        
      >
        <SunIcon aria-label="spawn new monster" />
        <Hide below="sm">
          <Text>Spawn</Text>
        </Hide>
      </Button>
      <Button
        display="flex"
        gap="2"
        variant="unstyled"
        minW="0"
        justifyContent={["center", "flex-start"]}
        px="0"
        onClick={() => navigate('/monsters')}    
      >
        <ViewIcon aria-label="view nfts" />
        <Hide below="sm">
          <Text whiteSpace="nowrap">Created</Text>
        </Hide>
      </Button>
    </Box>
  )
}

export default Navigation
