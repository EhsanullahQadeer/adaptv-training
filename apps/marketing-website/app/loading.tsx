import './loading.css';

const Loading = () => {
	return (
		<div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
			<div className="relative">
				<span className="global-loader" />
			</div>
		</div>
	);
};

export default Loading;
