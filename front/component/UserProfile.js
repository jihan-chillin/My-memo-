import React from 'react';
import {Avatar, Card} from 'antd';

const UserProfile = () =>{
 return(
     <Card>
        
         <Card.Meta
            avatar={<Avatar>JH</Avatar>}
            title="jihan"
         />
     </Card>
 )
}

export default UserProfile;