import {Box, Center, SimpleGrid, Flex, Text} from '@chakra-ui/react'

export function Cardcomponent(data, type) {  

  return(
    <SimpleGrid columns={1} spacingY={5} padding={5}>
            {  data.map((item, index) => {
                    if (type == "상의"){
                    return (
                        <Box height='100px' 
                        border="0.5px solid #e4e4e4"
                        padding={3}
                        shadow={"md"}>
                            <Flex 
                            marginTop={3} 
                            height={"60px"} 
                            flexDir={"column"}  
                            justifyContent={"space-between"}>                                    
                            <Text 
                            w={"100%"}
                            fontWeight={"bold"}
                            whiteSpace={"nowrap"}
                            overflow={"hidden"}
                            textOverflow={"ellipsis"}>
                            {item[3]}
                            </Text>
                                <Text>
                                    {item[4]}
                                </Text>
                            </Flex>
                        </Box>
                    )
                    }                       
                })
            }
    </SimpleGrid>
  )
}