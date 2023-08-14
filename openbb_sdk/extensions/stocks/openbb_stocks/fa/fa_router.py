# pylint: disable=W0613:unused-argument
"""Fundamental Analysis Router."""

from openbb_core.app.model.command_context import CommandContext
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.model.results.empty import Empty
from openbb_core.app.provider_interface import (
    ExtraParams,
    ProviderChoices,
    StandardParams,
)
from openbb_core.app.query import Query
from openbb_core.app.router import Router
from pydantic import BaseModel

router = Router(prefix="/fa")


@router.command
def analysis() -> OBBject[Empty]:  # type: ignore
    """Analyse SEC filings with the help of machine learning."""
    return OBBject(results=Empty())


@router.command(model="BalanceSheet")
def balance(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Balance Sheet."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="BalanceSheetGrowth")
def balance_growth(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Balance Sheet Statement Growth."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="DividendCalendar")
def cal(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Show Dividend Calendar for a given start and end dates."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="CashFlowStatement")
def cash(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Cash Flow Statement."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="CashFlowStatementGrowth")
def cash_growth(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Cash Flow Statement Growth."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="ExecutiveCompensation")
def comp(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Executive Compensation."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="StockSplitCalendar")
def comsplit(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Stock Split Calendar."""
    return OBBject(results=Query(**locals()).execute())


@router.command
def customer() -> OBBject[Empty]:  # type: ignore
    """List of customers of the company."""
    return OBBject(results=Empty())


@router.command
def dcfc() -> OBBject[Empty]:  # type: ignore
    """Determine the (historical) discounted cash flow."""
    return OBBject(results=Empty())


@router.command(model="HistoricalDividends")
def divs(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Historical Dividends."""
    return OBBject(results=Query(**locals()).execute())


@router.command
def dupont() -> OBBject[Empty]:  # type: ignore
    """Detailed breakdown for Return on Equity (RoE)."""
    return OBBject(results=Empty())


@router.command(model="EarningsCalendar")
def earning(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Earnings Calendar."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="HistoricalEmployees")
def emp(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Number of Employees."""
    return OBBject(results=Query(**locals()).execute())


@router.command
def enterprise() -> OBBject[Empty]:  # type: ignore
    """Enterprise value."""
    return OBBject(results=Empty())


@router.command
def epsfc() -> OBBject[Empty]:  # type: ignore
    """Earnings Estimate by Analysts - EPS."""
    return OBBject(results=Empty())


@router.command(model="AnalystEstimates")
def est(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Analyst Estimates."""
    return OBBject(results=Query(**locals()).execute())


@router.command
def fama_coe() -> OBBject[Empty]:  # type: ignore
    """Fama French 3 Factor Model - Coefficient of Earnings."""
    return OBBject(results=Empty())


@router.command
def fama_raw() -> OBBject[Empty]:  # type: ignore
    """Fama French 3 Factor Model - Raw Data."""
    return OBBject(results=Empty())


@router.command
def fraud() -> OBBject[Empty]:  # type: ignore
    """Key fraud ratios including M-score, Z-score and McKee."""
    return OBBject(results=Empty())


@router.command
def growth() -> OBBject[Empty]:  # type: ignore
    """Growth of financial statement items and ratios."""
    return OBBject(results=Empty())


@router.command
def historical_5() -> OBBject[Empty]:  # type: ignore
    return OBBject(results=Empty())


@router.command(model="IncomeStatement")
def income(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Income Statement."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="IncomeStatementGrowth")
def income_growth(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Income Statement Growth."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="StockInsiderTrading")
def ins(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Stock Insider Trading."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="InstitutionalOwnership")
def ins_own(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Institutional Ownership."""
    return OBBject(results=Query(**locals()).execute())


@router.command
def key() -> OBBject[Empty]:  # type: ignore
    return OBBject(results=Empty())


@router.command(model="KeyMetrics")
def metrics(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Key Metrics."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="KeyExecutives")
def mgmt(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Key Executives."""
    return OBBject(results=Query(**locals()).execute())


@router.command
def mktcap() -> OBBject[Empty]:  # type: ignore
    """Obtain the market capitalization or enterprise value."""
    return OBBject(results=Empty())


@router.command  # CHECK IF NEWS IS NEEDED HERE
def news() -> OBBject[Empty]:  # type: ignore
    return OBBject(results=Empty())


@router.command(model="CompanyOverview")
def overview(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Company Overview."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="StockOwnership")
def own(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Stock Ownership."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="PriceTargetConsensus")
def pt(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Price Target Consensus."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="PriceTarget")
def pta(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Price Target."""
    return OBBject(results=Query(**locals()).execute())


@router.command
def rating() -> OBBject[Empty]:  # type: ignore
    """Analyst prices and ratings over time of the company."""
    return OBBject(results=Empty())


@router.command(model="FinancialRatios")
def ratios(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Extensive set of ratios over time."""
    return OBBject(results=Query(**locals()).execute())


@router.command
def revfc() -> OBBject[Empty]:  # type: ignore
    """Earning Estimate by Analysts - Revenue."""
    return OBBject(results=Empty())


@router.command(model="RevenueGeographic")
def revgeo(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Revenue Geographic."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="RevenueBusinessLine")
def revseg(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Revenue Business Line."""
    return OBBject(results=Query(**locals()).execute())


@router.command
def rot() -> OBBject[Empty]:  # type: ignore
    """Number of analyst ratings over time on a monthly basis."""
    return OBBject(results=Empty())


@router.command
def score() -> OBBject[Empty]:  # type: ignore
    """Value investing scores for any time period."""
    return OBBject(results=Empty())


@router.command
def sec() -> OBBject[Empty]:  # type: ignore
    return OBBject(results=Empty())


@router.command
def shares() -> OBBject[Empty]:  # type: ignore
    return OBBject(results=Empty())


@router.command(model="ShareStatistics")
def shrs(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Share Statistics."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="HistoricalStockSplits")
def split(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Historical Stock Splits."""
    return OBBject(results=Query(**locals()).execute())


@router.command
def supplier() -> OBBject[Empty]:  # type: ignore
    """List of suppliers of the company."""
    return OBBject(results=Empty())


@router.command(model="EarningsCallTranscript")
def transcript(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Earnings Call Transcript."""
    return OBBject(results=Query(**locals()).execute())
