import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const PAGE_NUMBER = 1;

const Students = () => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText,
          });
        }
      })
      .then((res) => {
        if (page > 1) {
          let resArr = [...students, ...res.data];
          setStudents(resArr);
        } else {
          setStudents(res.data);
        }
        console.log(students.length);
      })
      .catch((err) => console.log(err.statusText));
  }, [page]);

  return (
    <div>
      <InfiniteScroll
        dataLength={students.length}
        next={loadMore}
        hasMore={true}
        loader={<h1>Loading..</h1>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {students.length > 0 &&
          students.map((student, i) => (
            <div className="md:w-auto m-10 p-5 rounded-md bg-gray-400" key={i}>
              <h4>Student ID: {student._id}</h4>
              <h4>Student Name: {student.name}</h4>
              <h4>Classes attended: {student.trips}</h4>
            </div>
          ))}
      </InfiniteScroll>
    </div>
  );
};

export default Students;
