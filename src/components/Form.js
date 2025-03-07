import sample_postcode from '../utils/postcode.js'
import React from 'react'
import { useState } from 'react';
import styles from './Form.module.css';

function Form({ addPost }) {

  const [name, setName] = useState('');
  const [phonenumber, setPhoneNumber] = useState(['', '', '']);
	const [postcode, setPostcode] = useState(''); // 우편번호
  const [address, setAddress] = useState(''); // 주소
  const [detailaddress, setDetailAddress] = useState(''); // 상세주소

	  // 폼 제출 처리
		const handleSubmit = (e) => {
			e.preventDefault();
			addPost(name, phonenumber.join('-'), postcode, address, detailaddress);
	
			// 폼 초기화
			setName('');
			setPhoneNumber(['', '', '']);
			setPostcode('');
			setAddress('');
			setDetailAddress('');
		};

		// 우편번호 찾기 클릭 처리
		const handlePostcodeClick = (e) => {
			e.preventDefault();  // 기본 동작 방지 (폼 제출 방지)
			sample_postcode(setPostcode, setAddress, setDetailAddress);
		};

	return (
		<div className={styles.wrapper}>
			<h1>입력폼</h1>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <fieldset>
        {/* Name */}
        <div className={styles.form_div}>
          <label htmlFor="name">이름</label>
          <input type="text" id="name" name='name' value={name} 
						onChange={(e) => setName(e.target.value)}/>
        </div> {/* //Name */}

        {/* Phone_Number */}
        <div className={styles.form_div2}>
          <label htmlFor="number">전화번호</label>
          <input type="text" id='number' name='number' style={{width:'80px'}} 
						value={phonenumber[0]} onChange={(e) => setPhoneNumber([e.target.value, phonenumber[1], phonenumber[2]])}/>
					<span> - </span>

          <label htmlFor='number2'></label>
          <input type="text" id='number2' name='number2' style={{width:'80px'}} 
						value={phonenumber[1]} onChange={(e) => setPhoneNumber([phonenumber[0], e.target.value, phonenumber[2]])}/>
          <span> - </span>

          <label htmlFor='number3'></label>
          <input type="text" id='number3' name='number3' style={{width:'80px'}}
						value={phonenumber[2]} onChange={(e) => setPhoneNumber([phonenumber[0], phonenumber[1], e.target.value])}/>
        </div> {/* //Phone_Number */}
        
        {/* Address */}
        <div className={styles.form_div}>
          <label htmlFor="address">주소</label>
          <input type="text" id='address' placeholder='우편번호' value={postcode} readOnly/>
        </div> 
        <div className={styles.form_div}>
          <button className={styles.post_number} onClick={handlePostcodeClick} >우편번호 찾기</button>
        </div>
        <div className={styles.form_div}>
          <label htmlFor="full_address"></label>
          <input type="text" id='full_address' placeholder='주소' value={address} readOnly/>
        </div>
        <div className={styles.form_div}>
          <label htmlFor="detail_address"></label>
          <input type="text" id='detail_address' placeholder='상세주소' value={detailaddress} 
						onChange={(e)=> setDetailAddress(e.target.value)}/>
        </div> {/* //Address */}

        {/* Submit */}
        <div>
          <label htmlFor="submit" ></label>
          <input type="submit" id='submit' value="전송" className={styles.submit}/>
        </div>
        </fieldset>
      </form> {/* //Form */}
		</div>
	)
}

export default Form