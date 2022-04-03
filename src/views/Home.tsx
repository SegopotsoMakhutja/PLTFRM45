import {
    Flex,
    Heading,
    Text,
    useDisclosure,
    Slide,
} from '@chakra-ui/react';
import { Drawer, Form } from '../components';
import { loremIpsum } from "lorem-ipsum";


export const Home = () => {
    const { isOpen, onToggle } = useDisclosure();
    const data = loremIpsum({ count: 2, units: 'paragraphs' });

    const isMobile = window.innerWidth < 768;

    const description = 'This is a design that you will need to code up and impress us.'

    return (
        <Flex display={'flex'} w={'full'} flex={1} flexDir={{ base: 'column', md: 'row' }} overflowY={{ base: 'scroll', md: 'hidden' }}>
            <Flex w={{ base: 'full', md: '40%' }} h={'100vh'} bg='yellow.400' justifyContent={'center'}>
                <Drawer
                    onToggle={onToggle}
                    isOpen={isOpen}
                    heading={'Front-end Challenge!'}
                    description={description}
                />
            </Flex>
            {isOpen ? (
                <Slide
                    direction={isMobile ? 'top' : 'left'}
                    in={isOpen}
                    style={{ zIndex: `${isMobile ? 1 : 0}` }}
                >
                    <Flex
                        color='black'
                        h={'100vh'}
                        bg='orange.400'
                        alignItems={'center'}
                        flexDir={'column'}
                        w={{ base: '100%', md: '60%' }}
                        float={'right'}
                        p={8}
                    >
                        <Heading as={'h1'} p={8}>
                            My World Today
                        </Heading>
                        <Text p={4}>
                            {data}
                        </Text>
                        <Text p={4}>
                            {data}
                        </Text>
                    </Flex>
                </Slide>
            ) : (
                <Flex
                    float={{ base: 'none', md: 'right' }}
                    flexDir={'column'}
                    flex={1}
                    p={{ base: '1rem', md: '8rem' }}
                    mt={{ base: '1rem' }}
                    justifyContent={'center'}
                    h={'100vh'}
                    w={{ base: '100%', md: '60%' }}
                >
                    <Form />
                </Flex>
            )}
        </Flex>
    )
}