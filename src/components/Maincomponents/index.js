import {useState, useEffect} from 'react';
import {Box, Center, SimpleGrid, Flex, Text} from '@chakra-ui/react'
import {getData} from "../../api/getData"
import { useQuery } from '@tanstack/react-query';
function MainComponent() {
    //const [data, setData] = useState([])
    const {data,isLoading, error} = useQuery(["wear"],()=>getData(), {
        initialData: { data: [] },
    });
    console.log(data.data)

    /*useEffect(() => {
        getData().then((res) => {
            setData(res.data)
        })

    }, [])*/
    return (<> < Center > <Flex w={"40vh"} h={"100vh"} flexDir={"column"}>
        <Text margin={"0 auto"} lineHeight={"10vh"} fontSize={"2xl"}>무신사 랭킹</Text>
        <SimpleGrid bg={"#eee"} columns={1} spacingY={5} padding={5}>
            { isLoading ? null:
                data.data.map((item, index) => {
                    return (
                        <Box height='130px' border="1px">
                            <Text>{item[0]}등</Text>
                            <Text>{item[3]}</Text>
                            <Flex
                                marginTop={3}
                                height={"60px"}
                                flexDir={"row"}
                                justifyContent={"space-between"}>
                                <Text>{item[4]}</Text>
                                <Text w={"70px"} textAlign={"center"}>{item[7]}</Text>
                            </Flex>
                        </Box>
                    )
                })
            }
        </SimpleGrid>
    </Flex>
</Center> </>
    );
}

export default MainComponent;