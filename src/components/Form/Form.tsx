import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    RadioGroup,
    Radio,
    Button,
    Stack,
    useToast
} from '@chakra-ui/react';
import { FiCalendar, FiCreditCard } from 'react-icons/fi';

import { useState } from 'react';

const formDefaultValues = {
    name: '',
    gender: 'male',
    dob: '',
    email: '',
    mobile: '',
    cusId: '',
    membership: 'classic',
}

const labelStyle = {
    display: 'inline-block',
    width: '150px',
}

export const Form = () => {

    const [formData, setFormData] = useState(formDefaultValues)

    const toast = useToast();

    const handleSubmit = () => {
        toast({
            title: 'Details Saved.',
            description: "We've saved your details for you.",
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
    }

    const handleCancel = () => {
        setFormData(formDefaultValues);
    }

    return (
        <>

            {/*  Name field */}
            <FormControl display={{ base: 'block', md: "inline-flex" }} alignItems={'center'}>
                <FormLabel htmlFor="name" style={labelStyle}>Name</FormLabel>
                <Input
                    id="name"
                    placeholder="Please enter your full name."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </FormControl>

            {/*  Gender */}
            <FormControl display={{ base: 'block', md: "inline-flex" }} alignItems={'center'}>
                <FormLabel htmlFor="gender" style={labelStyle}>Gender</FormLabel>
                <RadioGroup
                    id="gender"
                    onChange={(selectedValue) => setFormData({ ...formData, gender: selectedValue })}
                    value={formData.gender}
                    w={'full'}
                    display={'flex'}
                    m={'0 auto'}
                    justifyContent={'space-around'}
                >
                    <Radio value="male" size="md" _hover={{ bg: 'blue', boxShadow: 'blue', size: 'xl', color: 'blue' }}>
                        Male
                    </Radio>
                    <Radio value="female" size="md" _hover={{ bg: 'pink', boxShadow: 'pink' }}>
                        Female
                    </Radio>
                </RadioGroup>
            </FormControl>

            {/* Date of birth */}
            <FormControl display={{ base: 'block', md: "inline-flex" }} alignItems={'center'} my={2}>
                <FormLabel htmlFor="dob" style={labelStyle}>Date of Birth</FormLabel>
                <InputGroup>
                    <Input
                        id="dob"
                        placeholder="Please select date."
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    />
                    <InputRightElement children={<FiCalendar />} color="grey.100" />
                </InputGroup>
            </FormControl>

            {/* email field */}
            <FormControl display={{ base: 'block', md: "inline-flex" }} alignItems={'center'} my={2}>
                <FormLabel htmlFor="email" style={labelStyle}>Email</FormLabel>
                <Input
                    id="email"
                    placeholder="Please enter your email."
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </FormControl>

            {/* mobile input */}
            <FormControl display={{ base: 'block', md: "inline-flex" }} alignItems={'center'} my={2}>
                <FormLabel htmlFor="mobile" style={labelStyle}>Mobile</FormLabel>
                <Input
                    id="mobile"
                    placeholder="Please enter your mobile number."
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                />
            </FormControl>

            {/* customer id */}
            <FormControl display={{ base: 'block', md: "inline-flex" }} alignItems={'center'} my={2}>
                <FormLabel htmlFor="cusId" style={labelStyle}>Customer Id</FormLabel>
                <Input
                    id="cusId"
                    placeholder="Please enter your customer id."
                    value={formData.cusId}
                    onChange={(e) => setFormData({ ...formData, cusId: e.target.value })}
                />
            </FormControl>

            {/* membership selection */}
            <FormControl display={{ base: 'block', md: "inline-flex" }} alignItems={'center'} my={2}>
                <FormLabel htmlFor="membership" style={labelStyle}>Membership<FiCreditCard /></FormLabel>
                <RadioGroup
                    id="membership"
                    onChange={(selectedValue) => setFormData({ ...formData, membership: selectedValue })}
                    value={formData.membership}
                    display={'flex'}
                    w={'full'}
                    m={'0 auto'}
                    justifyContent={'space-around'}
                >
                    <Radio value="classic" _hover={{ bg: 'purple' }} size="md" _active={{ bg: 'purple', boxShadow: 'purple', color: 'purple' }}> Classic </Radio>
                    <Radio value="silver" _hover={{ bg: 'silver' }} size="md"> Silver </Radio>
                    <Radio value="gold" _hover={{ bg: 'gold' }} size="md"> Gold </Radio>
                </RadioGroup>
            </FormControl>

            {/* stacked buttons */}
            <Stack direction={{ base: 'column', md: 'row' }} justifyContent={{ base: 'center', md: 'flex-end' }} mt={'1rem'}>
                <Button mr={4} colorScheme={'grey'} variant={'ghost'} onClick={handleCancel} w={{ base: 'full', md: '200px' }} fontWeight={'400'} _hover={{ boxShadow: 'lg' }}>
                    CANCEL
                </Button>
                <Button type="submit" colorScheme={'teal'} bg={'teal.300'} variant={'solid'} w={{ base: 'full', md: '200px' }} onClick={handleSubmit} fontWeight={'400'} _hover={{ boxShadow: 'lg' }}>
                    SAVE
                </Button>
            </Stack>
        </>
    );
}