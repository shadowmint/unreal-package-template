#ifdef TEMPLATE_TESTS
#include "AutomationTest.h"
#include "packages/TEMPLATE/Source.h"

DECLARE_LOG_CATEGORY_EXTERN(TEMPLATE_TEST_LOG, All, All);
DEFINE_LOG_CATEGORY(TEMPLATE_TEST_LOG);

IMPLEMENT_SIMPLE_AUTOMATION_TEST(FTEMPLATE_Tests, "TEMPLATE_Tests", EAutomationTestFlags::ATF_Game)

bool FTEMPLATE_Tests::RunTest(const FString& Parameters)
{
  UE_LOG(TEMPLATE_TEST_LOG, Warning, TEXT("SourceTests: Ok"));
  UE_LOG(TEMPLATE_TEST_LOG, Error, TEXT("SourceTests: Error message"));

  auto instance = new Source();
  delete instance;

  TestTrue(TEXT("Some message"), true);

  return true;
}
#endif
