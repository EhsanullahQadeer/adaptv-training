import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import React from 'react';

interface PhoneNumberInputProps extends React.ComponentProps<typeof PhoneInput> {
	value: string;
	onChange: (phone: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ defaultCountry = 'us', value, onChange, ...rest }) => {
	return <PhoneInput defaultCountry={defaultCountry} value={value} onChange={onChange} {...rest} />;
};

export default PhoneNumberInput;
