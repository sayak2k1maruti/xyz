console.log(list);
const increse = () => {
    console.log('dfdg');
    flag ++;
    flag = flag == list.length ? 0 : flag;
    document.getElementById('number').innerHTML = list[flag];
    return 0;
}