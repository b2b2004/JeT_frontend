import React from 'react'
import Navbar from '../component/nav/Navbar'

import './css/survey.css'

const Survey = () => {
  return (
    <>
        <Navbar/>
        
        <div className='survey-container'>
            <div className='survey-title'>
                <h2>성향 설문 조사</h2>
            </div>
            <div className='survey-wrapper'>
                <div className='question-container'>
                    <div className='question-box'>
                        <div className='question'>
                            <div className='question-title'>
                                <h3>계획을 세울때 나는?</h3>
                            </div>
                            <div className='answer-container'>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    시간 단위로 세세하게 장소와 동선까지 정하고 싶어
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    지역이랑 숙소만 정해놓고 나머지는 여행 중에 정할래
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    계획 없이 기분에 따라 발길 닿는대로 다니고 싶어
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    함께하는 사람들이 하자는 데로 할래
                                </label>
                            </div>
                        </div>

                        <div className='question'>
                            <div className='question-title'>
                                <h3>한 장소에서 다른 장소로 이동할 때 나는</h3>
                            </div>
                            <div className='answer-container'>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    이동시간은 최대한 줄이고 관광을 더 하고 싶어
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    천천히 이곳저곳 둘러보며 이동할래
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    이동을 많이 하고 싶지 않아, 움직이는게 싫어
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    이동도 함꼐하면 즐거울거야, 무엇이든 상관없어
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='question-box'>
                        <div className='question'>
                            <div className='question-title'>
                                <h3>내가 원하는 여행 스타일은?</h3>
                            </div>
                            <div className='answer-container'>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    최대한 많은 관광지를 둘러보고 싶어
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    쉬엄쉬엄 여유롭게 구경다니고 싶어
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    구경보다는 편안한 곳에서 느긋하게 힐링하고 싶어
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    같이 가는 사람들이 하자는대로 다닐래
                                </label>
                            </div>
                        </div>

                        <div className='question'>
                            <div className='question-title'>
                                <h3>멋진 풍경이 내 눈 앞에 펼쳐졌을 때 나는?</h3>
                            </div>
                            <div className='answer-container'>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    당연히 풍경사진도, 내 인생샷도 열심히 찍어야지
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    주변 사람한테 부탁해서 단체사진부터 찍고싶어
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    함께 간 사람들의 사진을 찍어줄래
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    사진을 찍기보다는 그 순간을 내 눈에 담고싶어
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='question-box'>
                        <div className='question'>
                            <div className='question-title'>
                                <h3>가려고 했던 식당이 문을 닫았을 때 나는?</h3>
                            </div>
                            <div className='answer-container'>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    미리 다른 식당도 조사해 놓을 거라 걱정없어
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    다시 검색해서 검증된 식당을 갈래
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    주변 사람들한테 맛있는 식당을 아는지 물어볼래
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    그 근처에 괜찮아 보이는 식당으로 갈래
                                </label>
                            </div>
                        </div>

                        <div className='question'>
                            <div className='question-title'>
                                <h3>내가 더 많은 시간을 보내고 싶은 곳은?</h3>
                            </div>
                            <div className='answer-container'>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    사람이 붐비는 시끌벅적한 곳이야
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    우리밖에 없느 한적하고 조용한 곳이야
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    그날의 기분에 따라 달라진것 같아
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    다같이 있다면 장소의 분위기 상관없이 어디든 좋아
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='question-box'>
                        <div className='question'>
                            <div className='question-title'>
                                <h3>일행과 서로 가고 싶은 곳이 다를 때는?</h3>
                            </div>
                            <div className='answer-container'>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    나 혼자라도 다녀오고 싶어
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    그룹 일정이 끝나고 혼자 다녀 올래
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    다음을 기약하며 그곳을 포기하고 그룹이랑 다닐래
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    그곳이 얼마나 좋은지 어필해서 그룹을 설득시켜볼래
                                </label>
                            </div>
                        </div>

                        <div className='question'>
                            <div className='question-title'>
                                <h3>다른 사람이 말을 걸어왔을때 나는?</h3>
                            </div>
                            <div className='answer-container'>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    새로운 사람들과 즐겁게 대화를 이어 갈래
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    다른 친구들이 대답하는 걸 지켜보고 있을거야
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    내가 바로 먼저 말을 거는 그 사람이야
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    모르는 사람을 만나기보다는 우리끼리만 놀고 싶어
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='question-box'>
                        <div className='question'>
                            <div className='question-title'>
                                <h3>방문한 장소가 마음에 들 때 나는?</h3>
                            </div>
                            <div className='answer-container'>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    그래도 계확한 만큼만 머물고 다음 장소로 이동할래
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    다음 계획을 위해 떠나지만 다른 날에 다시 방문할래
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    기존 계획을 변경하더라도 그곳에 오래 있을래
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    함께 하는 사람들의 의견을 따를래
                                </label>
                            </div>
                        </div>

                        <div className='question'>
                            <div className='question-title'>
                                <h3>이번 여행에서 방문할 장소를 선택할 때 나는?</h3>
                            </div>
                            <div className='answer-container'>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    사람들이 많이 가는 유명한 장소 위주로 다닐래
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    랜드마크 몇 군데만 가고 나머지는 마음대로 다닐래
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    아무도 안 가본 새로운 장소를 찾아보고 싶어
                                </label>
                                <label className='answer'>
                                    <input type="checkbox"/>
                                    함께하는 사람들이 가자는 대로 갈래
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='survey-submit-btn'>
                        <button>
                            설문지 제출
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Survey
