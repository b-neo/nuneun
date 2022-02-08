import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	border: 1px solid grey;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	height: 60px;
	background-color: white;
	border-bottom: 1px solid grey;
`;

const Question = styled.div`
	background-color: #ffffff;
	color: black;
	width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	img {
		width: 300px;
	}
`;

const QuestionTitle = styled.span`
	font-size: 1.5rem;

	margin: 10px 0;
`;

const QuestionText = styled.span`
	font-size: 1.2rem;
	margin: 10px 20px;
	line-height: 1.2;
`;

const CardWrapper = styled.div`
	background-color: #ffffff;
	width: 500px;
	padding: 20px 0;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

const Card = styled.div`
	background-color: #ffe48a;
	width: 450px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: auto;
`;

const FriendCard = styled(Card)`
	background-color: #dfdfdf;
`;

const Person = styled.div`
	text-align: left;
	font-size: 22px;
`;

const Choice = styled.button<IChoiceCard>`
	border: 1px solid black;
	width: 350px;
	font-size: 1.1em;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 15px;
	background-color: ${(props) => (props.choose ? "#ff5100" : "#b1b1b1")};
	color: ${(props) => (props.choose ? "white" : "black")}; ;
`;
const FriendChoice = styled(Choice)`
	background-color: ${(props) => (props.choose ? "blue" : "#b1b1b1")};
	color: ${(props) => (props.choose ? "white" : "black")}; ;
`;

const InfoText = styled.span`
	font-size: 1.2em;
	margin: 10px 0;
	color: #ff3300;
	font-weight: bold;
`;

const ShareBtn = styled(Choice)<IChoiceCard>`
	background-color: #ffe48a;
	color: black;
`;

interface IChoiceCard {
	choose?: boolean;
}

function ItemScreen() {
	const { search } = useLocation();
	const [myChoice1, setMyChoice1] = useState(false);
	const [myChoice2, setMyChoice2] = useState(false);
	const [showFriendChoice, setShowFriendChoice] = useState(false);
	const choiceClickHandler = (e: any, n: number) => {
		if (n === 1) {
			setMyChoice1(true);
			setShowFriendChoice(true);
		} else {
			setMyChoice2(true);
			setShowFriendChoice(true);
		}
	};

	return (
		<Container>
			<Header style={{ display: "none" }} />
			<Question>
				<QuestionTitle>당신의 선택은?</QuestionTitle>
				<QuestionText>
					자네에게 기회를 주겠네. 무조건 20억을 받겠나, 아니면 50% 확률로 이기면
					500억을 받고 지면 아무것도 못받는 도박을 하겠나? 자 선택하게
				</QuestionText>
				<img src="images/oilnam.jpg"></img>
			</Question>
			<CardWrapper>
				<FriendCard>
					<Person>🐧친구 김남빈</Person>
					<FriendChoice>확실한 20억을 챙기기</FriendChoice>
					<FriendChoice choose={showFriendChoice}>500억에 도박</FriendChoice>
				</FriendCard>
				<InfoText>내 선택을 마치면 친구의 선택이 보여요.</InfoText>
				<Card>
					<Person>나</Person>
					<Choice
						disabled={myChoice2}
						onClick={(e) => choiceClickHandler(e, 1)}
						choose={myChoice1}
					>
						확실한 20억을 챙기기
					</Choice>
					<Choice
						disabled={myChoice1}
						onClick={(e) => choiceClickHandler(e, 2)}
						choose={myChoice2}
					>
						500억에 도박
					</Choice>
				</Card>
			</CardWrapper>
			<ShareBtn style={{ display: "none" }}>내 친구 선택시켜보기</ShareBtn>
		</Container>
	);
}

export default ItemScreen;
