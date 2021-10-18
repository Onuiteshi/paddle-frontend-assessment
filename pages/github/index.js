import Image from "next/image";
import React from "react";
import Async from "react-async";
import styles from "../../styles/Repo.module.css";

const loadRepos = async () =>
  await fetch(
    "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc"
  )
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

const index = () => {
  return (
    <div className={`${styles.repo} container `}>
      <Async promiseFn={loadRepos}>
        <Async.Loading>Loading...</Async.Loading>
        <Async.Fulfilled>
          {(data) => {
            console.log(data);
            return (
              <div className="">
                <div className="text-center ">
                  <h1>Trending Repos</h1>
                </div>
                {data.items.map((user) => (
                  <div key={user.name} className="card mt-4 ">
                    <div className="card-body d-flex align-items-center justify-content-around">
                      <div className="border ">
                        <Image
                          src={user.owner.avatar_url}
                          width={150}
                          height={150}
                          alt="avatar"
                        />
                      </div>
                      <div className="">
                        <h3>{user.name}</h3>
                        <p>{user.description}</p>
                        <div className="">
                          <div className="text-center ms-2 d-inline-block border">
                            <p>Stars: {user.stargazers_count}</p>
                          </div>
                          <div className="text-center ms-2 d-inline-block border">
                            <p>Issues: {user.open_issues_count}</p>
                          </div>
                          <div className="text-center ms-2 d-inline-block ">
                            <p>
                              Submitted at {user.updated_at} by{" "}
                              {user.owner.login}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          }}
        </Async.Fulfilled>
        <Async.Rejected>
          {(error) => `Something went wrong: ${error.message}`}
        </Async.Rejected>
      </Async>
    </div>
  );
};

export default index;
