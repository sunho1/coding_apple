/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목,글제목수정]=useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0,0]);

  let [modal,setModal] = useState(false);

  let [detail, setDetail]= useState('');

  let [inputText, setInputText]= useState('');

  return (
    <div className='App'>
      <div className="black-nav">
        <h4 style={{fontSize:'16px'}}>블로그임</h4>
      </div>
      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>9월 17일 발행</p>
      </div> */}

      <button>가나다순정렬</button>
      <button onClick={()=>{setModal(!modal)}}>모달바꾸기</button>
      <button onClick={()=>{
        let copy = [...글제목];
        copy[0]='여자 코트 추천';
        글제목수정(copy);
      }}>글 수정</button>
      <button onClick={()=>{
        따봉변경([0,0,0,0]);

      }}>reset</button>
      
      {inputText}

      {
        글제목.map((a, i)=>{
          return(
            <div className='list' key={i} onClick={()=>{
              setModal(true);
              setDetail(a);
            }}>
              <h4>{ 글제목[i] }  <span onClick={(e)=>{

                e.stopPropagation();

                let copy = [...따봉]
                copy[i]++;
                따봉변경(copy)
              }}>👍</span> {따봉[i]}</h4>
              <p>9월 17일 발행</p>
              <button onClick={()=>{
                let nArray = [...글제목]
                nArray.splice(i,1);

                글제목수정(nArray);

              }}>글 삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{setInputText(e.target.value)}} />
      <button onClick={()=>{
        if(inputText=='' && inputText.length==0){
          return;
        }
        let nArr=[...글제목];
        nArr.unshift(inputText);

        글제목수정(nArr);
      }}>글 추가</button>

      {
        modal ? <Modal color={'yellow'} detail={detail} 글제목={글제목} 글제목수정={글제목수정}></Modal> : <></>
      }

      

    </div>
  );
}

function Modal(props){
  // return(
  //   <div className="modal" style={{backgroundColor:props.color}} key="modal">
  //     <h4>{props.글제목[0]}</h4>
  //     <p>날짜</p>
  //     <p>상세내용</p>
  //     <button onClick={()=>{
  //       let copys = [...props.글제목]
  //       if(copys[0]==='여자 코트 추천'){
  //         copys[0]='남자 코트 추천'
  //       }else{
  //         copys[0]='여자 코트 추천';
  //       }
  //       props.글제목수정(copys)
  //     }}>글수정</button>
  //   </div>
  // )
  return(
    <div className="modal" key="modal">
      <h4>{props.detail}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
