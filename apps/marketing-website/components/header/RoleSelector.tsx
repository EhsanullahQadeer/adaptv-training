import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@workspace/ui/components/select';
import { FireIcon, UserClientIcon } from '@workspace/ui/icons';

interface IProps {
	isDarkBg: boolean;
	selectedRole: string;
	onRoleChange: (value: string) => void;
	selectedBtnClasses?: string;
}

const RoleSelector = (props: IProps) => {
	const { isDarkBg, selectedRole, onRoleChange, selectedBtnClasses } = props;
	return (
		<Select variant={isDarkBg ? 'dark' : 'light'} value={selectedRole} onValueChange={onRoleChange}>
			<SelectTrigger className={`rounded-full ${selectedBtnClasses}`}>
				<SelectValue placeholder="Select role" />
			</SelectTrigger>
			<SelectContent className={`rounded-md`}>
				<SelectItem value="for-coach">
					<FireIcon fill={isDarkBg ? 'white' : 'black'} />
					<span>For Coach</span>
				</SelectItem>
				<SelectItem value="client">
					<UserClientIcon />
					<span>Client</span>
				</SelectItem>
			</SelectContent>
		</Select>
	);
};

export default RoleSelector;
