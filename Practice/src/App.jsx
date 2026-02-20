import { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
	font-size: 5em;
`;

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Div>
				<i className="fa fa-ravelry"></i>
				<div>Новый стейт</div>
			</Div>
		</>
	);
}

export default App;
