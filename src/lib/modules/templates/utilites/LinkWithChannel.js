"use strict";

import Link from "next/link";
import { useParams } from "next/navigation";

const LinkWithChannel = ({ href, ...props }) => {
  const { channel } = useParams({ channel });

  if (!href.startsWith("/")) {
    return <Link {...props} href={href} />;
  }

  const encodedChannel = encodeURIComponent(channel ?? "");
  const hrefWithChannel = `/${encodedChannel}${href}`;
  return <Link {...props} href={hrefWithChannel} />;
};
