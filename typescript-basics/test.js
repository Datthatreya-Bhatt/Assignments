let url = 'http://localhost:3000';


let test = async ()=>{
    // let res = await axios.post(`${url}/todo`,{
    //     text: 'This is a test'
    // });

     let res = await axios.get(`${url}`);

    // let res = await axios.delete(`${url}/delete/1`);
    
    // let res = await axios.put(`${url}/edit/2023-07-13T06:29:08.367Z`,{
    //     text: 'Some new text'
    // });


    console.log(res);
}
test();

