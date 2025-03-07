import React, { useState } from 'react';
import styles from './FormList.module.css';


function FormList({ posts, deletePost }) {


	return (
		<>
		<div className={styles.wrapper}>
			<div className={styles.wrapper2}>
				<table>
					<thead>
						<tr>
							<th>순서</th>
							<th>이름</th>
							<th>전화번호</th>
							<th>우편번호</th>
							<th>주소</th>
							<th>상세주소</th>
						</tr>
					</thead>
					{posts.map((post, index)=>(
						<tbody>
							<tr >
								<td key={post.id}>{index = index + 1}</td>
								<td>{post.name}</td>
								<td>{post.phonenumber}</td>
								<td>{post.postcode}</td> 
								<td>{post.address}</td>
								<td>{post.detailaddress}</td>
								<button className={styles.delete}onClick={() => deletePost(post.id)}>삭제</button>
							</tr>
						</tbody>
					))}
				</table>
			</div>
		</div>
		</>
	)
}

export default FormList