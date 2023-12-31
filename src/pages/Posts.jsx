import React, { useEffect, useState } from "react";
import { useFetching } from './../hooks/useFetching';
import { getPageCount } from './../utils/pages';
import MyButton from './../components/button/MyButton';
import Loader from './../components/Loader/Loader';
import PostList from './../components/PostList';
import Pagination from './../components/pagination/Pagination';
import PostForm from './../components/PostForm';
import PostService from './../API/PostService';
import MyModal from "../components/MyModal/MyModal";
import PostFilter from './../components/PostFilter';
import {usePosts, useSortedPosts} from '../hooks/usePosts'
import { useRef } from "react";
import MySelect from "../components/select/MySelect";
function Posts() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef()
  const observer = useRef();
  console.log(lastElement)

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getALL(limit, page);
      setPosts([...posts,...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    if(isPostsLoading) return;
    if(observer.current) observer.current.disconnect();
    var callback = function (entries, observer) {
      if(entries[0].isIntersecting && page < totalPages) {
        console.log(page)
      setPage(page + 1)
        
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current)
  },[isPostsLoading])
  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };
  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <MySelect
       value={limit}
       onChange={value => setLimit(value)}
       defaultValue="Кол-во элементов на странице"
       options={[
        {value: 5, name: '5'},
        {value: 10, name: '10'},
        {value: 25, name: '25'},
        {value: -1, name: 'Показать все'},

       ]}
             />

      {postError && <h1>Произогла ошибка ${postError}</h1>}
      <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Список постов "}
        />
        <div ref={lastElement} style={{height: 20, background: "red"}}/>
      {isPostsLoading && 
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>}
     

      
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
