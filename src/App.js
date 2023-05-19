import {ChakraProvider} from '@chakra-ui/react';
import Maincomponent from './components/Maincomponents';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <Maincomponent/>
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default App;
