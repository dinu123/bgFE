// pages/admin/Companies.js
"use client"
import CustomButton from "@/common-components/CustomButton";
import Layout from "../../../admin-components/Layout"

import { BsDownload, BsPlus } from "react-icons/bs";
import Link from "next/link";
import SearchComponent from "@/common-components/SearchComponent";

import * as React from 'react';


// backgroundColor: "rgba(128, 128, 128, 0.3)", 
const InternalTeam = () => {
  return (
    <Layout>

<div className="container-fluid" style={{  minHeight: "100vh" }}>
  <div className="container">
  <div style={{ display: 'flex', justifyContent: "space-between"}}>
                <div style={{ margin: "10px" }}>
                    <SearchComponent
                        data={{
                            styles: {
                                borderRadius: '10px',
                                padding: '6px',
                                backgroundColor: 'white',
                                border: '1px solid gray',
                                width:"400px"
                               
                            }
                        }}
                    />
                </div>
                
                
                <div style={{ display: 'flex' }}>
                    <div style={{ margin: "10px" }}>
                        <CustomButton
                            text="Download as Excel"
                            icon={<BsDownload style={{ fontSize: '1.2em' }} />}
                        />
                    </div>
                    <div style={{ margin: "10px" }}>
                    <Link href="/admin/candidates/add-candidates" passHref style={{ textDecoration:"none"}}>
                <CustomButton
                    text="New Team"
                    icon={<BsPlus style={{ fontSize: '1.2em' }} />}
                />
            </Link>
                    </div>
                </div>
            </div>
  </div>
  {/* <DataTable/> */}
  {/* <CompletedCandidates/> */}
</div>

    </Layout>
  );
};

export default InternalTeam;
