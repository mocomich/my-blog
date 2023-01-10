import Head from "next/head";

import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import { Spacer } from "@/components/atoms/Spacer";
import { pageTitle } from "@/components/meta";
import { HeadGroup } from "@/components/molecules/HeadGroup";
import { NextPageWithLayout } from "@/types/next";

type Props = any;

const ProfilePage: NextPageWithLayout<Props> = () => {
  return (
    <main className="mx-auto w-full px-4 md:px-8 lg:max-w-7xl">
      <Head>
        <title>{pageTitle("Profile")}</title>
      </Head>
      <Spacer axis="VERTICAL" size={12} />
      <HeadGroup title="Profile" />
      <Spacer axis="VERTICAL" size={16} />
      <p className="text-black dark:text-white">準備中...</p>
      <Spacer axis="VERTICAL" size={16} />
    </main>
  );
};

ProfilePage.getLayout = DefaultLayout;

export default ProfilePage;
