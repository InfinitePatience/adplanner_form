// 주소 API 불러오기
// 참고 : https://postcode.map.daum.net/guide#sample 

const sample_postcode = (setPostcode, setAddress, setDetailAddress) =>{
	new window.daum.Postcode({
		oncomplete: (data) =>{
			let addr = ''; // 주소 변수

			// 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져옵니다.
      if (data.userSelectedType === 'R') {
        addr = data.roadAddress;
      } else {
        addr = data.jibunAddress;
      }

			setPostcode(data.zonecode); // 우편번호 상태에 저장
      setAddress(addr); // 주소 상태에 저장
      setDetailAddress(''); // 상세주소를 비워둡니다.

			// 상세주소 필드에 포커스
      document.getElementById('detail_address').focus();
		},
	}).open();
}

export default sample_postcode;