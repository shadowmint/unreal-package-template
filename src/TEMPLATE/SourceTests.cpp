#ifdef TEMPLATE_TESTS
#include "AutomationTest.h"
#include "packages/TEMPLATE/Source.h"

DECLARE_LOG_CATEGORY_EXTERN(TEMPLATE_TEST_LOG, All, All);
DEFINE_LOG_CATEGORY(TEMPLATE_TEST_LOG);

IMPLEMENT_SIMPLE_AUTOMATION_TEST(FSourceTests, "SourceTests", EAutomationTestFlags::ATF_Editor)

bool FSourceTests::RunTest(const FString& Parameters)
{
  UE_LOG(TEMPLATE_TEST_LOG, Warning, TEXT("SourceTests: Ok"));
  UE_LOG(TEMPLATE_TEST_LOG, Error, TEXT("SourceTests: Error 1"));
  UE_LOG(TEMPLATE_TEST_LOG, Error, TEXT("SourceTests: Error 2"));

  auto instance = new Source();
  delete instance;

  TestTrue(TEXT("Some value"), false);

  return true;
}
#endif
