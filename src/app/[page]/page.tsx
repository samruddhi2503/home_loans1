type Props = {
  params: Promise<{ page: string }>;
};

export default async function DynamicPage({ params }: Props) {
  const awaitedParams = await params;      // await params here
  const { page } = awaitedParams;          // then destructure

  if (page === 'apply-now') {
    return (
      <div>
        <h1>Apply Now Page</h1>
        <p>This is the content for Apply Now.</p>
      </div>
    );
  }

  if (page === 'login') {
    return (
      <div>
        <h1>Login Page</h1>
        <p>This is the content for Login.</p>
      </div>
    );
  }

  return <div>Page not found</div>;
}
