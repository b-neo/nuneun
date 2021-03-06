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
				<QuestionTitle>????????? ??????????</QuestionTitle>
				<QuestionText>
					???????????? ????????? ?????????. ????????? 20?????? ?????????, ????????? 50% ????????? ?????????
					500?????? ?????? ?????? ???????????? ????????? ????????? ?????????? ??? ????????????
				</QuestionText>
				<img src="images/oilnam.jpg"></img>
			</Question>
			<CardWrapper>
				<FriendCard>
					<Person>?????????? ?????????</Person>
					<FriendChoice>????????? 20?????? ?????????</FriendChoice>
					<FriendChoice choose={showFriendChoice}>500?????? ??????</FriendChoice>
				</FriendCard>
				<InfoText>??? ????????? ????????? ????????? ????????? ?????????.</InfoText>
				<Card>
					<Person>???</Person>
					<Choice
						disabled={myChoice2}
						onClick={(e) => choiceClickHandler(e, 1)}
						choose={myChoice1}
					>
						????????? 20?????? ?????????
					</Choice>
					<Choice
						disabled={myChoice1}
						onClick={(e) => choiceClickHandler(e, 2)}
						choose={myChoice2}
					>
						500?????? ??????
					</Choice>
				</Card>
			</CardWrapper>
			<ShareBtn style={{ display: "none" }}>??? ?????? ??????????????????</ShareBtn>
		</Container>
	);
}

export default ItemScreen;
