import styled from "styled-components";

function UserList() {
  return (
    <UL.Headers> 
    유저 추가하기 
    </UL.Headers>
    
  );
}

export default UserList;

const Headers = styled.div`
  background-color: darkblue;
`

const UL = {
  Headers
};