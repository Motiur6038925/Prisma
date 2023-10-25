export function middleware() {
  console.log("I am middleware from api");

  // Then Run  your Terminal Then see at Terminal "I am middleware"
  // And You Will See "I am middleware" when you reload your Broswer in Everypage
}

export const config = {
  // Middleware For Specific Path
  matcher: ["/api/:path*"],
};
