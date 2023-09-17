/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남우동 맛집';
  let [글제목,글제목수정]=useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);

  let [modal,setModal] = useState(false);

  // function thumbsUp(){
  //   console.log(1);
  // }

  return (
    <div className='App'>
      <div className="black-nav">
        <h4 style={{fontSize:'16px'}}>블로그임</h4>
      </div>
      <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>9월 17일 발행</p>
      </div>

      <button>가나다순정렬</button>
      <button onClick={()=>{setModal(!modal)}}>모달바꾸기</button>
      <button onClick={()=>{
        let copy = [...글제목];
        copy[0]='여자 코트 추천';
        글제목수정(copy);
      }}>글 수정</button>

      {
        글제목.map((a, i)=>{
          return(
            <div className='list'>
              <h4>{ 글제목[i] }  <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉}</h4>
              <p>9월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal ? <Modal></Modal> : <></>
      }

      

    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
