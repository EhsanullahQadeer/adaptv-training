import { PhoneInput, PhoneInputProps, PhoneInputRefType } from 'react-international-phone';
import 'react-international-phone/style.css';
import React from 'react';



const PhoneNumberInput = React.forwardRef<PhoneInputRefType, PhoneInputProps>(
	({ defaultCountry = 'us', value, onChange, ...rest }, ref) => {
		return <PhoneInput ref={ref} defaultCountry={defaultCountry} value={value} onChange={onChange} {...rest} />;
	},
);

PhoneNumberInput.displayName = 'PhoneNumberInput';

export default PhoneNumberInput;
