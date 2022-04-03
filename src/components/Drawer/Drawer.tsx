import {
    Text,
    Avatar,
    VStack,
    IconButton,
    Flex,
    Heading,
} from '@chakra-ui/react';

import FaceAvatar from '../../assets/face.svg';
import { FiChevronRight, FiChevronLeft, FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface IDrawer {
    onToggle: () => void;
    isOpen: boolean;
    heading: string;
    description: string;
}

export const Drawer = ({ onToggle, isOpen, heading, description }: IDrawer) => {

    const isLikelyDesktop = window.innerWidth > 767;

    const getChevron = () => {
        const desktopDirection = isOpen
            ? <FiChevronLeft />
            : <FiChevronRight />
        const mobileDirection = isOpen
            ? <FiChevronUp />
            : <FiChevronDown />

        return isLikelyDesktop ? desktopDirection : mobileDirection;
    }

    return (
        <>
            <Flex
                h={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
                direction={'column'}
                zIndex={2}
            >
                <Flex
                    direction={'column'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    zIndex={2}
                >
                    <Avatar
                        src={FaceAvatar}
                        size='3xl'
                        bg={'orange.200'}
                        mb={'8rem'}
                    />
                    <VStack>
                        <Heading as='h1' size='lg' fontWeight={'500'}>
                            {heading}
                        </Heading>
                        <Text textAlign={'center'} size='lg'>
                            {description}
                        </Text>
                    </VStack>
                </Flex>
                <IconButton
                    colorScheme={'blackAlpha'}
                    mt={'8rem'}
                    aria-label='chevron-for-drawer'
                    borderRadius={'50%'}
                    size={'lg'}
                    onClick={onToggle}
                    icon={getChevron()}
                    zIndex={2}
                />
            </Flex>
        </>
    );
};